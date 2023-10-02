"use client"

import Image from "next/image";
import logo from "../../assets/images/logo_atm.png";
import { HeaderTag } from "./styles";

export default function Header() {
    return <HeaderTag>
        <Image src={logo} alt="logo atmosmarine"/>
    </HeaderTag>
}