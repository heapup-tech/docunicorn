// "sh": "console",
// "ksh": "console",
// "csh": "console",
// "tcsh": "console",
// "zsh": "console",
// "bash": "console",
// "bat": "console",
// "cmd": "console",
// "awk": "console",
// "fish": "console",
// "exp": "console",
// "nu": "console",
export const isTerminalLanguage = (language: string) => {
  return (
    language === 'sh' ||
    language === 'ksh' ||
    language === 'csh' ||
    language === 'tcsh' ||
    language === 'zsh' ||
    language === 'bash' ||
    language === 'bat' ||
    language === 'cmd' ||
    language === 'awk' ||
    language === 'fish' ||
    language === 'exp' ||
    language === 'nu'
  )
}
