import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'
import { Box, Flex, Text } from 'rebass'
import { A } from '../components/ui'

export default () => (
  <Page>
    <Flex
      p={[3, 4, 4]}
      alignItems="center"
      justifyContent="center"
      css={{
        height: 'calc(100vh - 60px)'
      }}
      color="near-black">
      <Flex
        bg="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          maxWidth: '800px'
        }}>
        <Box css={{ textAlign: 'center' }}>
          <Text mb={3} fontSize={5} color="mid-gray" fontFamily="sans">
            Alessandro Arnodo
          </Text>
          <Text mb={3} fontSize={3} color="mid-gray" fontFamily="sans">
            I write code. For fun & food.
          </Text>
          <Text mb={3} fontSize={1} color="mid-gray" fontFamily="sans">
            If you want to get in touch, feel free to send me an{' '}
            <A fontSize={2} href="mailto:alessandro@arnodo.net">
              email
            </A>{' '}
            ({' '}
            <Link href="/static/alessandro@arnodo.net.asc" passHref>
              <A fontSize={'inherit'}>GPG</A>
            </Link>{' '}
            0x784358031C8E1716 )
          </Text>
        </Box>
        <Box mt={5}>
          <Link href="/writing" passHref>
            <A fontSize={2} mx={1}>
              writing
            </A>
          </Link>
          <A
            fontSize={2}
            target="_blank"
            href="https://twitter.com/vesparny"
            mx={2}>
            tweets
          </A>
          <A
            fontSize={2}
            target="_blank"
            href="https://github.com/vesparny"
            mx={2}>
            code
          </A>
          <A
            fontSize={2}
            target="_blank"
            href="https://keybase.io/vesparny"
            mx={2}>
            keybase
          </A>
        </Box>
      </Flex>
    </Flex>
  </Page>
)
