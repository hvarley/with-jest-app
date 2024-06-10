
import Link from "next/link";
import Tennis from "./madetech";

export const metadata = {
    title: "Made Tech Interview",
  };
  
  export default function Page() {
    return (
        <>
            <h1>Made Tech Interview</h1>
            <Link href="https://miro.com/welcome/bDE5MGtQcDJWWTlPRGFDZ1daRnFCV2FLZG1hNTF3NUtHUmVqUGZrS0tjQWE4MGxkUmhjcmV5dkp4djRmR3JWenwzMDc0NDU3MzQ3Mjk0NjM1MDY0fDE=?share_link_id=949681777108">Miroboard</Link>
            <Tennis />
        </>
    );
  }
  