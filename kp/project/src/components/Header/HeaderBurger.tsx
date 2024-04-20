import { HamburgerIcon } from '@chakra-ui/icons'
import {
   Box,
   IconButton,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HeaderBurger = () => {
   return <div className='header__burger'>
      <Menu>
         <MenuButton
            color={'black'}
            background={'orange'}
            _expanded={{ color: 'black', border: 'orange' }}
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label='Options'
            variant='outline'
         />
         <MenuList>
            <MenuItem>
               <Link to={'/auth/register'}>
                  <Box style={{ fontWeight: 'bold', width: "100%" }}>
                     Регистрация
                  </Box>
               </Link>
            </MenuItem>
            <MenuItem>
               <Link to={'/auth/login'}>
                  <Box style={{ fontWeight: 'bold', width: "100%" }}>
                     Войти
                  </Box>
               </Link>
            </MenuItem>
         </MenuList>
      </Menu>
   </div>
}

export default HeaderBurger
