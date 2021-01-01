import { Table, TableCaption, Td, Tr } from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React, { useMemo } from "react";

interface IProps {
  data: any;
  options: HTMLReactParserOptions;
}

const TableTr: React.FC<IProps> = ({ data, options }) => {
  return (
    <Tr>
      {data.children.map((item: any, index: number) => {
        return <Td key={index}>{domToReact(item.children, options)}</Td>;
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
      return t?.children.length ? t.children[0] : null;
    }, data.children);
    return (
      <Table variant="striped" colorScheme="primary">
        {figcaption && (
          <TableCaption>
            {domToReact(figcaption.children, options)}
          </TableCaption>
        )}
        {table?.children.length &&
          table.children.map((item: any, index: number) => (
            <TableTr key={index} data={item} options={options} />
          ))}
      </Table>
    );
  }
  return null;
};
export default Figure;
