import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js Course",
    template: "%s | Code Athletic",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        style={{
          border: "2px solid orange",
          borderRadius: ".2rem",
          padding: ".5rem",
        }}>
        <header style={{backgroundColor: "lightblue", padding: "1rem"}}>
          <p>Header</p>
        </header>
        <div style={{margin: "1rem .5rem"}}>{children}</div>
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
