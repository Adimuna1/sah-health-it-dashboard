// app/layout.js

export const metadata = {
  title: 'SAH Dashboard',
  description: 'Health IT Tooling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
