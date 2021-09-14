import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
background-color: #28293D;
`;

export const Box = styled.View`
flex:1;
border:1px solid black;
border-radius:15px;
padding:15px;
margin:15px;
justify-content:center;
align-items:center;
background-color:#526180;
`;

export const ImageArea = styled.View``;

export const Imagem = styled.Image`
height:170px;
width:170px;
border-radius:10px;
`;

export const Texto = styled.Text`
color:#FFF;
`;

export const TitleArea = styled.View`
padding: 20px;
margin:5px;
`;

export const DescriptionArea = styled.View``;

export const ComprarArea = styled.View`
flex-direction:row;
align-content:space-between;
margin-top:10px;
`;

export const ComprarBotaoArea = styled.View`
margin-right:5px;
`;

export const ComprarBotao = styled.Button``;

export const FavoritarArea = styled.View`
margin-left:5px;
`;

export const FavoritarBotao = styled.Button`
`;