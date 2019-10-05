import React from "react"
import { Global } from "@emotion/core"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Wrapper from "../components/Wrapper"

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
            background: "#F8F8F8",
            color: "#222",
            fontFamily: "IBM Plex",
            fontSize: "16px",
            lineHeight: "1.625rem",
          },
        }}
      />
      <Wrapper>{children}</Wrapper>
    </DesignSystemProvider>
  )
}
