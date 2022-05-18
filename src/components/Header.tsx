import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

// 左のメニューバーの配列
const pages = ['趣味', '好きな食べ物', 'Blog'];
// 関数定義
const ResponsiveAppBar = () => {
  // ナビゲーションバーを押したときにメニューを開くHooks（←）
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const test = () => {
      console.log('test');
        }

  return (
    <AppBar color='inherit' position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* 真ん中のロゴのやつ */}
          {/* 左のやつ */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* これわからん（多分中身の配列からとってくるやつ） */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* 左の配列からとってきたナビゲーション */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
// ナビゲーションバーを押したときにメニューを開くHooks（右）
// const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

// {/* 左のアイコンのやつ */}
          // {/* <Box sx={{ flexGrow: 0 }}>
          //   <Tooltip title="Open settings">
          //     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          //       <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          //     </IconButton>
          //   </Tooltip>
          //   <Menu
          //     sx={{ mt: '45px' }}
          //     id="menu-appbar"
          //     anchorEl={anchorElUser}
          //     anchorOrigin={{
          //       vertical: 'top',
          //       horizontal: 'right',
          //     }}
          //     keepMounted
          //     transformOrigin={{
          //       vertical: 'top',
          //       horizontal: 'right',
          //     }}
          //     open={Boolean(anchorElUser)}
          //     onClose={handleCloseUserMenu}
          //   >
          //     {settings.map((setting) => (
          //       <MenuItem key={setting} onClick={handleCloseUserMenu}>
          //         <Typography textAlign="center">{setting}</Typography>
          //       </MenuItem>
          //     ))}
          //   </Menu>
          // </Box> */}