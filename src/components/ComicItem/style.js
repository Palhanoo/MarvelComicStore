import styled from "styled-components/native";

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