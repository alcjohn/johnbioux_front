import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout/Layout";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import CheckIcn from "../components/CheckIcn";
import { NextChakraLink } from "../components/ChakraLink";
interface contactProps {}
const Form: React.FC = () => {
  const [submited, onSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data: any) => {
    setLoading(true);
    var form_data = new FormData();
    const token = await executeRecaptcha();

    for (const key in data) {
      form_data.append(key, data[key]);
    }
    form_data.append("_wpcf7_recaptcha_response", token);
    const res = await fetch(
      "https://admin.johnbioux.fr/wp-json/contact-form-7/v1/contact-forms/86/feedback",
      {
        method: "POST",
        body: form_data,
      }
    );

    const json = await res.json();
    onSubmited(true);
    setLoading(false);
    setMessage(json.message);
  };
  return (
    <Layout>
      {!submited ? (
        <Container>
          <Heading
            as="h1"
            pt={12}
            pb={4}
            fontSize="4xl"
            color="primary.500"
            fontFamily="roboto"
          >
            Contactez-moi
          </Heading>
          <Text py={4}>
            Une idée? Un projet ? N'hésitez pas à me contacter.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={2}>
              <FormLabel>Votre nom</FormLabel>
              <Input name="your_name" required ref={register} />
            </FormControl>
            <FormControl mb={2}>
              <FormLabel>Votre adresse de messagerie</FormLabel>
              <Input type="email" name="your_email" required ref={register} />
            </FormControl>
            <FormControl mb={2}>
              <FormLabel>Objet</FormLabel>
              <Input name="your_subject" required ref={register} />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Votre message</FormLabel>
              <Textarea name="your_message" ref={register} />
            </FormControl>
            <Button textTransform="uppercase" type="submit" isLoading={loading}>
              Envoyer
            </Button>
          </form>
        </Container>
      ) : (
        <Flex
          p={4}
          h="full"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <CheckIcn />
          <Text my={4}>{message}</Text>
          <NextChakraLink my={4} href="/blog">
            Voir les derniers articles
          </NextChakraLink>
        </Flex>
      )}
    </Layout>
  );
};
const contact: React.FC<contactProps> = ({}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfVcCgaAAAAAFgnzog6bUKTRu2UV0nrBRfeuUhM">
      <Form />
    </GoogleReCaptchaProvider>
  );
};
export default contact;
