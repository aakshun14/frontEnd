import HeaderAppBar from "../components/header/HeaderAppBar";
import FormDetails from "../components/main/FormDetails";
import Footer from "../components/footer/footer";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Form1(props) {
  const navigate = useNavigate()
  useEffect(() => {
    if(!props.name){
      navigate('/')
    }
  },[props.name])
  return (
      <Box >
        <HeaderAppBar  name={props.name} />
        <Box >
          <FormDetails />
        </Box>
        <Footer />
      </Box>
  );
}


