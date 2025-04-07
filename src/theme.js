import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
		background: {
			default: "#070c1e"
		}
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  },
  components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "rgba(7, 12, 30, 0.8)",
					boxShadow: "none",
					padding: "24px",
					backdropFilter: "blur(9.5px)",
				},
			}
		},
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
		MuiTextField: {
			styleOverrides: {
				root: {
					border: "0",
					borderRadius: "8px"
				},
				input: {
					fontSize: "12px",
					lineHeight: "18px",
					padding: "16px 12px"
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontSize: "12px",
					lineHeight: "18px",
					color: "#949494"
				}
			}			
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontSize: "12px",
					color: "#949494"
				}
			}
		}
  },
});

export default theme;
