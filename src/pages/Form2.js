import HeaderAppBar from "../components/header/HeaderAppBar";
import FurtherFormDetails from "../components/main/FurtherFormDetails";
import Footer from "../components/footer/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Form2(props) {
  const navigate = useNavigate()
  useEffect(() => {
    if(!props.name){
      navigate('/')
    }
  },[props.name])
  return (
    <>
        <HeaderAppBar name={props.name} />
        <FurtherFormDetails />
        <Footer />
    </>
  );
}