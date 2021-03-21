import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import SuccessIconBlock from 'components/blocks/SuccessIconBlock';
import {
  Column,
  PrimaryBoldLargeCenteredText,
  SecondaryCenteredText,
} from 'components/styled';
import BasicButton from 'components/buttons/BasicButton';

const Container = styled.View`
  padding-bottom: 20px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  flex: 1;
`;

function RegistrationSuccessBlock({onSignIn, openMailURL, mailService}) {
  return (
    <Container>
      <SuccessIconBlock type="mail" />
      <Column>
        <PrimaryBoldLargeCenteredText>
          Вы успешно зарегестрированы!
        </PrimaryBoldLargeCenteredText>
        <SecondaryCenteredText paddingTop={15}>
          На указанный Вами e-mail отправлено письмо с запросом подтверждения
          регистрации.
        </SecondaryCenteredText>
        <BasicButton
          onClick={onSignIn}
          title="Войти"
          containerStyles={{flex: 0, marginTop: 15}}
          color="primary"
        />
        <BasicButton
          onClick={openMailURL}
          title={`Открыть почту @${mailService}`}
          containerStyles={{flex: 0, marginTop: 15}}
          color="secondary"
        />
      </Column>
    </Container>
  );
}

RegistrationSuccessBlock.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  openMailURL: PropTypes.func.isRequired,
  mailService: PropTypes.string.isRequired,
};

export default RegistrationSuccessBlock;
