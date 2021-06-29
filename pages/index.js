import { Page, Text } from '@geist-ui/react'

export default function Home() {
  return (
    <Page dotBackdrop size="mini">
      <Page.Header>
        <Text h2 style={{fontWeight:"bold"}}>Webiza.</Text>
      </Page.Header>
      <Text>
       Time to have your modern website.
      </Text>
    </Page>
  )
}
