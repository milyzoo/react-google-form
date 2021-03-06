import styled from "styled-components";
import { useState } from "react";

const FormWrapper = styled.div`
  position: relative;
  margin: 130px auto 120px;
  max-width: 645px;

  @media (max-width: 568px) {
    margin: 50px auto 40px;
    width: 90%;
  }
`;

const Form = styled.form`
  padding: 40px;
  background-color: #fff;
  box-shadow: 2.5px 2.5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    border-top: 10px solid #fad312;
    border-radius: 5px 5px 0 0;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const InfoWrapper = styled.div`
  margin: 35px 0 55px;

  p:first-child {
    margin-bottom: 10px;
  }
`;

const Info = styled.p`
  ${(props) =>
    props.isRequired
      ? `color: #e74149;
  margin-top: 20px;`
      : `color: black;`};
`;

const QuestionWrapper = styled.li`
  position: relative;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  max-width: 285px;

  input:not([type="radio"]) {
    padding: 3px;
    border: none;
    outline-style: none;
    font-size: 16px;
    transition: all 0.5s;
    border-bottom: 1px solid #d0d0d0;
    &::placeholder {
      color: #afafaf;
      font-size: 16px;
      transition: all 0.5s;
    }
    &:focus::placeholder {
      opacity: 0.35;
    }
  }

  ${(props) =>
    props.isRadio &&
    `
  input[type="radio"] {
    appearance: none;
  }
  input:checked + span::after {
    opacity: 1;
  }`}

  ${(props) =>
    props.isFocus &&
    `
  position: relative;
  max-width: 285px;

  input {
    padding: 3px;
    outline-style: none;
    border: none;
    font-size: 16px;
    transition: all 0.5s;
    border-bottom: 1px solid #d0d0d0;
  }

  ${InputUnderLine} {
    position: absolute;
    left: 50%;
    bottom: -1px;
    width: 0%;
    border-bottom: 2px solid #fad312;
    transition: all 0.3s;
  }

  input:focus + ${InputUnderLine} {
    left: 0%;
    width: 100%;
  }`}
`;

const Question = styled.label`
  margin-bottom: 20px;
  width: fit-content;
  font-size: 20px;

  ${(props) =>
    props.isRequired &&
    `
  &::after {
    content: "*";
    margin: 0 5px;
    color: #e74149;
  }`}
`;

const RadioWrapper = styled.label`
  position: relative;
  padding-left: 20px;
  cursor: pointer;

  &:nth-child(2) {
    margin-bottom: 20px;
  }

  ${(props) =>
    props.isRequired &&
    `
  &::after {
    content: "*";
    margin: 0 5px;
    color: #e74149;
  }`}
`;

const Option = styled.span`
  margin-left: 5px;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 2px;
    height: 15px;
    width: 15px;
    border: 1px solid #fad312;
    border-radius: 50%;
    box-shadow: transparent;
    transition: 0.5s;
  }
  &::after {
    position: absolute;
    content: "";
    left: 3px;
    top: 5px;
    height: 11px;
    width: 11px;
    background-color: #fad312;
    border-radius: 50%;
    opacity: 0;
    transition: 0.5s;
  }
`;

const InputUnderLine = styled.span`
  position: absolute;
  left: 50%;
  top: 71px;
  width: 0%;
  border-bottom: 2px solid #fad312;
  transition: all 0.3s;
`;

const RequiredText = styled.p`
  display: none;
  position: absolute;
  bottom: -25px;
  left: 3px;
  color: #e74149;

  ${(props) => props.isEmptyMessage && `display: block;`}
  ${(props) => props.checked && `display: block;`}
`;

const Description = styled.p`
  font-size: 15px;
  ${(props) => props.isDescription && `margin: -10px 0 20px 0;`};
`;

const SubmitButton = styled.input`
  margin-bottom: 20px;
  padding: 10px 0;
  width: 90px;
  border: 0;
  border-radius: 3px;
  background-color: #fad312;
  font-size: 15px;
  font-family: "Microsoft JhengHei";
  outline-style: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(250, 211, 18, 0.75);
  }
`;

export default function FormItems() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    source: "",
    other: "",
  });
  const [isEmptyMessage, setIsEmptyMessage] = useState(null);
  const [isNotChecked, setIsNotChecked] = useState(null);

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "nickname":
        setFormData({
          ...formData,
          name: e.target.value,
        });
        break;
      case "mail":
        setFormData({
          ...formData,
          email: e.target.value,
        });
        break;
      case "phone":
        setFormData({
          ...formData,
          phone: e.target.value,
        });
        break;
      case "option":
        setFormData({
          ...formData,
          option: e.target.value,
        });
        setIsNotChecked(false);
        break;
      case "source":
        setFormData({
          ...formData,
          source: e.target.value,
        });
        break;
      case "other":
        setFormData({
          ...formData,
          other: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.option) setIsNotChecked(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.option ||
      !formData.source
    )
      return setIsEmptyMessage(true);

    alert(`
      ?????????${formData.name}
      ???????????????${formData.email}
      ???????????????${formData.phone}
      ???????????????${formData.option}
      ?????????????????????????????????${formData.source}
      ?????????${formData.other}
    `);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>???????????????????????????</Title>
        <InfoWrapper>
          <Info>???????????????2020/12/10 ~ 2020/12/11</Info>
          <Info>???????????????????????????????????????????????????1???</Info>
          <Info isRequired>* ??????</Info>
        </InfoWrapper>
        <ul>
          <QuestionWrapper isFocus>
            <Question htmlFor="nickname" isRequired>
              ??????
            </Question>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="????????????"
              onChange={handleInputChange}
            />
            <InputUnderLine></InputUnderLine>
            <RequiredText isEmptyMessage={!formData.name && isEmptyMessage}>
              ???????????????
            </RequiredText>
          </QuestionWrapper>
          <QuestionWrapper isFocus>
            <Question htmlFor="mail" isRequired>
              ????????????
            </Question>
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="??????????????????"
              onChange={handleInputChange}
            />
            <InputUnderLine></InputUnderLine>
            <RequiredText isEmptyMessage={!formData.email && isEmptyMessage}>
              ?????????????????????
            </RequiredText>
          </QuestionWrapper>
          <QuestionWrapper isFocus>
            <Question htmlFor="phone" isRequired>
              ????????????
            </Question>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="??????????????????"
              onChange={handleInputChange}
            />
            <InputUnderLine></InputUnderLine>
            <RequiredText isEmptyMessage={!formData.phone && isEmptyMessage}>
              ?????????????????????
            </RequiredText>
          </QuestionWrapper>
          <QuestionWrapper isRadio>
            <Question isRequired>????????????</Question>
            <RadioWrapper htmlFor="option1">
              <input
                type="radio"
                name="option"
                id="option1"
                value="??????????????????????????????"
                onChange={handleInputChange}
              />
              <Option>??????????????????????????????</Option>
            </RadioWrapper>
            <RadioWrapper htmlFor="option2">
              <input
                type="radio"
                name="option"
                id="option2"
                value="?????????????????????????????????"
                onChange={handleInputChange}
              />
              <Option>?????????????????????????????????</Option>
            </RadioWrapper>
            <RequiredText checked={isNotChecked}>?????????????????????</RequiredText>
          </QuestionWrapper>
          <QuestionWrapper isFocus>
            <Question htmlFor="source" isRequired>
              ??????????????????????????????
            </Question>
            <input
              type="text"
              id="source"
              name="source"
              placeholder="????????????"
              onChange={handleInputChange}
            />
            <InputUnderLine></InputUnderLine>
            <RequiredText isEmptyMessage={!formData.source && isEmptyMessage}>
              ???????????????????????????????????????
            </RequiredText>
          </QuestionWrapper>
          <QuestionWrapper isFocus>
            <Question htmlFor="other">??????</Question>
            <Description isDescription>????????????????????????</Description>
            <input
              type="text"
              id="other"
              name="other"
              placeholder="????????????"
              onChange={handleInputChange}
            />
            <InputUnderLine></InputUnderLine>
          </QuestionWrapper>
        </ul>
        <SubmitButton type="submit" value="??????" />
        <Description>???????????????????????????????????????</Description>
      </Form>
    </FormWrapper>
  );
}
