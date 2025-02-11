import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Flex,
  Spacer,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import HamburgerIcon from '@components/HamburgerIcon'
import SchoolOfCodeLogo from '@components/SchoolOfCodeLogo'
import { PomodoroTimer } from '@components/PomodoroTimer'

function NavBar() {
  const router = useRouter()
  return (
    <Box>
      <Flex justify="left" alignItems="center">
        <Link as={NextLink} variant="logo" href={'/'}>
          {router.pathname.endsWith('/[slug]') ? (
            <SchoolOfCodeLogo />
          ) : (
            <SchoolOfCodeLogo autoStart={true} loop={true} />
          )}
        </Link>
        <Spacer />
        {/*
                POMODORO TIMER
          */}
        {router.pathname.startsWith('/lessons') ? <PomodoroTimer /> : ''}
        <Box>
          {/*
                MOBILE / HAMBURGER MENU
          */}
          <Flex
            mt={6}
            alignItems="center"
            display={{ base: 'block', md: 'block', lg: 'none' }}
          >
            <Menu autoSelect={false}>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                ml={5}
                variant="outline"
              />
              <MenuList backgroundColor={'soc.vividViolet'}>
                <MenuItem>
                  <Link
                    as={NextLink}
                    href="/"
                    passHref
                    variant={
                      router.pathname === '/'
                        ? 'top-navigation-active'
                        : 'top-navigation'
                    }
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    as={NextLink}
                    href="/getting-started"
                    passHref
                    variant={
                      router.pathname.startsWith('/getting-started')
                        ? 'top-navigation-active'
                        : 'top-navigation'
                    }
                  >
                    GET STARTED
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    as={NextLink}
                    href="/lessons"
                    passHref
                    variant={
                      router.pathname.startsWith('/lessons')
                        ? 'top-navigation-active'
                        : 'top-navigation'
                    }
                  >
                    Tracks
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          {/*
                DESKTOP VERSION
          */}
          <Flex
            mt="6"
            alignItems="center"
            display={{ base: 'none', md: 'none', lg: 'block' }}
          >
            <Link
              as={NextLink}
              href="/"
              passHref
              variant={
                router.pathname === '/'
                  ? 'top-navigation-active'
                  : 'top-navigation'
              }
            >
              Home
            </Link>

            <Link
              as={NextLink}
              href="/getting-started"
              passHref
              variant={
                router.pathname.startsWith('/getting-started')
                  ? 'top-navigation-active'
                  : 'top-navigation'
              }
            >
              Get Started
            </Link>

            <Link
              as={NextLink}
              href="/lessons"
              passHref
              variant={
                router.pathname.startsWith('/lessons')
                  ? 'top-navigation-active'
                  : 'top-navigation'
              }
            >
              Tracks
            </Link>

            {/* <Button colorScheme="gray" variant="solid">
              <ConnectButton chainStatus="icon" showBalance={false} />
            </Button> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default NavBar
