import React from "react"
import { Global } from "@emotion/core"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import { Atoms } from "./designSystem/designSystem"
import Wrapper from "../components/Wrapper"
import Header from "../components/Header"

export default function Layout({ children, ...props }) {
  return (
    <DesignSystemProvider>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },
          html: {
            background: Atoms.colors.wash,
            color: Atoms.colors.text,
            fontFamily: Atoms.font.family.sans,
            fontSize: "125%",
            lineHeight: Atoms.baseline,

            [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
              fontSize: "100%",
            },
          },
        }}
      />
      <Header />
      <Wrapper>{children}</Wrapper>
    </DesignSystemProvider>
  )
}
