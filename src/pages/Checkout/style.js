import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex:1;
background-color:#28293D;
`;

export const Area = styled.View``;

export const Box = styled.TouchableHighlight`
display:flex;
border:1px solid black;
border-radius:15px;
justify-content: center;
padding: 5px;
margin:10px;
background-color:#526180;
`;

export const BoxArea = styled.View`
display:flex;
flex-direction:row;
`;

export const ImageArea = styled.View`
width:100px;
margin:15px;
`;

export const ComicImage = styled.Image`
width:100px;
height:100px;
border-radius:10px;
`;

export const TextArea = styled.View`
flex:1;
margin-left:10px;
margin-right:10px;
justify-content:space-between;
`;

export const TitleArea = styled.View`
width:180px;
`;

export const ComicTitle = styled.Text`
font-size: 15px;
font-weight:bold;
color:#FFF;
`;

export const ComicDescription = styled.Text`
font-size:12px;
color:#BABABA;
margin-bottom:30px;
padding-right:5px;
`;

export const ComicPrice = styled.Text`
align-self:flex-end
margin-right: 20px;
color: #FFE600;
margin-bottom:40px;
`;

export const PaymentArea = styled.View`
display:flex;
background-color: #7687A7;
border:1px solid black;
border-radius:15px;
justify-content: center;
padding: 5px;
margin:10px;
`;

export const PaymentAreaBox = styled.View`
display:flex;
justify-content:space-between;
flex-direction:row;
margin:10px;
`;

export const PaymentAreaInput = styled.View`
justify-content:space-between;
`;

export const PaymentInput = styled.TextInput``;


export const PaymentAreaText = styled.View`
justify-content:space-between;
margin:10px;
`;

export const PaymentText = styled.Text``;

export const CardBox = styled.View`
display:flex;
background-color: #30394B;
border:1px solid black;
border-radius:15px;
justify-content: center;
padding: 5px;
margin:10px;
`;

export const CardBoxArea = styled.View`
flex-direction:row;
justify-content:space-between;
margin:10px;
margin-top:10%;
`;

export const CardTextArea = styled.View`
justify-content:space-between;
`;

export const ComprarBotao = styled.Button`
`;

export const CardText = styled.Text`
color: #FDFDFD
`;

export const CardInputArea = styled.View``;

export const CardInput = styled.TextInput``;