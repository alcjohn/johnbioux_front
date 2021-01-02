import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React, { useMemo } from "react";

interface IProps {
  data: any;
  options: HTMLReactParserOptions;
}

const TableTr: React.FC<
  IProps & {
    head?: boolean;
  }
> = ({ data, options, head }) => {
  return (
    <Tr>
      {data.children.map((item: any, index: number) => {
        const Component = head ? Th : Td;
        return (
          // @ts-ignore
          <Component key={index}>
            {domToReact(item.children, options)}
          </Component>
        );
      })}
    </Tr>
  );
};

const Figure: React.FC<IProps> = ({ data, options }) => {
  if (data.attribs.class.includes("wp-block-table")) {
    const figcaption = data.children.find(
      (item: any) => item.name === "figcaption"
    );
    const table = useMemo(() => {
      const t = data.children.find((item: any) => item.name === "table");
      return t?.children.length ? t.children : null;
    }, data.children);
    return (
      <Box my={4}>
        <Table variant="striped" colorScheme="primary">
          {figcaption && (
            <TableCaption>
              {domToReact(figcaption.children, options)}
            </TableCaption>
          )}
          {table?.length &&
            table.map((item: any, index: number) => {
              switch (item.name) {
                case "thead":
                  return (
                    <Thead key={index}>
                      {item.children.map((item: any, index: number) => (
                        <TableTr
                          key={index}
                          data={item}
                          options={options}
                          head
                        />
                      ))}
                    </Thead>
                  );
                case "tbody":
                  return (
                    <Tbody key={index}>
                      {item.children.map((item: any, index: number) => (
                        <TableTr key={index} data={item} options={options} />
                      ))}
                    </Tbody>
                  );
                case "tfoot":
                  return (
                    <Tfoot key={index}>
                      {item.children.map((item: any, index: number) => (
                        <TableTr key={index} data={item} options={options} />
                      ))}
                    </Tfoot>
                  );
                default:
                  return null;
              }
            })}
        </Table>
      </Box>
    );
  }
  return null;
};
export default Figure;
