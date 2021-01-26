import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/layout/Layout';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import CheckIcn from '../components/CheckIcn';
import { NextChakraLink } from '../components/ChakraLink';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputCustom from '../components/InputCustom';

const schema = yup.object().shape({
  your_name: yup.string().required('Ce champ est obligatoire.'),
  your_email: yup
    .string()
    .email('L’adresse e-mail n’est pas valide.')
    .required('Ce champ est obligatoire.'),
  your_subject: yup.string().required('Ce champ est obligatoire.'),
  your_message: yup.string().required('Ce champ est obligatoire.'),
});

const Form: React.FC = () => {
  const [submited, onSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data: any) => {
    setLoading(true);
    var form_data = new FormData();
    const token = await executeRecaptcha();

    for (const key in data) {
      form_data.append(key, data[key]);
    }
    form_data.append('_wpcf7_recaptcha_response', token);
    const res = await fetch(
      'https://admin.johnbioux.fr/wp-json/contact-form-7/v1/contact-forms/86/feedback',
      {
        method: 'POST',
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
            Une idée ? Un projet ? N'hésitez pas à me contacter.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <InputCustom
              label="Votre nom"
              name="your_name"
              type="text"
              isRequired
              error={errors?.your_name?.message}
              register={register({ required: 'Ce champ est requis.' })}
            />
            <InputCustom
              label="Votre adresse de messagerie"
              name="your_email"
              type="email"
              isRequired
              error={errors?.your_email?.message}
              register={register({ required: 'Ce champ est requis.' })}
            />
            <InputCustom
              label="Objet"
              name="your_subject"
              type="text"
              isRequired
              error={errors?.your_subject?.message}
              register={register({ required: 'Ce champ est requis.' })}
            />
            <InputCustom
              label="Votre message"
              name="your_message"
              type="textarea"
              isRequired
              error={errors?.your_message?.message}
              register={register({ required: 'Ce champ est requis.' })}
            />
            <Button
              textTransform="uppercase"
              variant="ghost"
              type="submit"
              isLoading={loading}
            >
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
const contact: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfVcCgaAAAAAFgnzog6bUKTRu2UV0nrBRfeuUhM">
      <Form />
    </GoogleReCaptchaProvider>
  );
};

export function getStaticProps() {
  return {
    props: {},
  };
}
export default contact;
