const ICONS = {
    sun: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    github: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    mail: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    external: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    code: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    check: `<svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
    clock: `<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    briefcase: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
    book: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    zap: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    web: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    desktop: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    puzzle: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
    brain: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>`,
    test: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h10m0-11v11m0 0H5"/></svg>`,
    arrowRight: `<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    marketplace: `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
};

const CATEGORY_ICONS = {
    web: ICONS.web,
    desktop: ICONS.desktop,
    testing: ICONS.test,
    extension: ICONS.puzzle,
    ai: ICONS.brain,
};

const SKILL_ICONS = {
    "TypeScript": `<svg class="skill-icon" viewBox="0 0 24 24" fill="#3178c6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>`,
    "React": `<svg class="skill-icon" viewBox="0 0 24 24" fill="#61dafb"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.178 0 .35.032.5.114.775.444 1.086 2.07.673 4.215-.052.26-.113.527-.188.798a18.95 18.95 0 0 0-2.5-.65 18.896 18.896 0 0 0-1.608-1.9c1.327-1.245 2.587-1.977 3.123-1.577zm-7.26.03c.538 0 1.793.725 3.122 1.964A18.957 18.957 0 0 0 11.12 5.3c-.952.228-1.758.49-2.434.745C8.312 4.023 8.62 2.4 9.4 1.953c.147-.08.323-.12.51-.12zm3.63 3.66c.45.056.886.123 1.305.2a18.888 18.888 0 0 1-.327 1.164c-.165-.331-.337-.663-.521-.993-.18-.325-.365-.645-.557-.967.034.003.067.006.1.01zm-1.318.02c-.19.32-.375.64-.552.963-.186.33-.357.66-.52.99a18.35 18.35 0 0 1-.337-1.168c.42-.078.855-.145 1.31-.2zm-5.01 1.59a18.38 18.38 0 0 1 1.97-.627c.125.407.27.816.437 1.226-.336.665-.633 1.342-.883 2.018a12.83 12.83 0 0 1-1.524-2.617zm9.79-.595c.712.195 1.38.433 1.974.716a13.22 13.22 0 0 1-1.51 2.608c-.253-.674-.55-1.353-.885-2.02.167-.41.313-.82.42-1.304zM12 8.57a17.43 17.43 0 0 1 1.11 1.58c.367.58.695 1.17.985 1.76-.295.593-.624 1.184-.994 1.763-.368.576-.738 1.113-1.101 1.596-.36-.483-.73-1.02-1.1-1.596-.37-.578-.696-1.17-.993-1.76.29-.59.617-1.182.985-1.76A17.47 17.47 0 0 1 12 8.57zm-5.516 2.89c.35.676.647 1.355.9 2.028a13.01 13.01 0 0 1-1.513 2.612 12.78 12.78 0 0 1-1.97-.715 13.1 13.1 0 0 1 1.51-2.607 12.1 12.1 0 0 1 1.073-1.317zm10.07-.023c.378.424.73.87 1.07 1.327a13.02 13.02 0 0 1 1.52 2.608c-.646.284-1.312.52-1.97.716a13.012 13.012 0 0 1-1.52-2.617c.254-.676.553-1.355.9-2.034zm-3.6 4.73c.187.323.373.644.554.97.186.33.355.66.516.988a19.32 19.32 0 0 1-1.303.2 19.37 19.37 0 0 1-1.307-.2c.16-.327.33-.657.515-.988.182-.326.37-.647.557-.97h-.001zm-3.66 1.25a18.23 18.23 0 0 1 .524-1.002 18.4 18.4 0 0 1 .34 1.166 18.66 18.66 0 0 1-1.318-.016 18.28 18.28 0 0 1 .454-.148zm6.65.01c.155.047.31.096.457.148a18.02 18.02 0 0 1-1.316.02 18.25 18.25 0 0 1 .335-1.165c.184.334.364.667.524 1zm-5.002 1.12a18.56 18.56 0 0 1 1.612 1.904c-.428.073-.864.14-1.304.198a18.63 18.63 0 0 1-.19-.796c-.074-.27-.135-.537-.187-.8.02-.17.043-.34.07-.506zm3.4.001c.026.163.05.33.07.503a18.4 18.4 0 0 1-.187.796 19.55 19.55 0 0 1-.193.797 19.03 19.03 0 0 1-1.302-.2A18.22 18.22 0 0 1 13.34 18.5zm-6.745 1.86c.535.4 1.79-.335 3.12-1.578a18.56 18.56 0 0 1 1.605 1.895c-1.328 1.245-2.586 1.977-3.123 1.577-.773-.44-1.083-2.063-.67-4.21.05-.258.114-.524.19-.793.672.254 1.48.515 2.43.744a18.76 18.76 0 0 1-1.606 1.9c-.523.492-1.046.946-1.57 1.344zm7.25.032c-.533-.4-1.79.335-3.12 1.578a19.12 19.12 0 0 1-1.602-1.895c1.327-1.245 2.588-1.977 3.124-1.577.773.44 1.084 2.063.67 4.212-.05.258-.114.523-.19.793a18.71 18.71 0 0 1-2.43-.744 19.12 19.12 0 0 1 1.604-1.9c.523-.492 1.045-.945 1.572-1.344z"/></svg>`,
    "Node.js": `<svg class="skill-icon" viewBox="0 0 24 24" fill="#339933"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/></svg>`,
    "MongoDB": `<svg class="skill-icon" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>`,
    "Python": `<svg class="skill-icon" viewBox="0 0 24 24"><path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05-1.06-.13-.91-.21-.77-.29-.66-.36-.56-.43-.45-.51-.36-.59-.27-.67-.19-.75-.1-.83-.04-.91.01-.85.1-.8.19-.74.27-.67.37-.59.45-.51.55-.43.64-.35.73-.27.82-.19.91-.12.98-.05 1.04.02.48.04-.01-3.38.02-.3.08-.29.15-.26.22-.24.29-.2.36-.17.42-.13.49-.09.56-.06.63-.03.58.01zm-.08 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"/></svg>`,
    "Java": `<svg class="skill-icon" viewBox="0 0 24 24" fill="#f89820"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 .001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.774-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.772-.892 3.772-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>`,
    "PostgreSQL": `<svg class="skill-icon" viewBox="0 0 24 24" fill="#336791"><path d="M23.5454 11.7374c-.4718-4.2056-3.2517-7.8972-7.1631-9.5129a12.4984 12.4984 0 0 0-4.3802-.8118c-.3956.0044-.7912.03-.1868.0578l-.0822.007c-.7228.0645-1.437.2023-2.1424.3956h-.0044a12.0944 12.0944 0 0 0-2.3847.8207 12.0944 12.0944 0 0 0-5.0609 4.979A11.9785 11.9785 0 0 0 .669 12.4968a11.9785 11.9785 0 0 0 3.5426 8.49l.0044.0044a11.9785 11.9785 0 0 0 8.49 3.5426 11.9785 11.9785 0 0 0 8.49-3.5426 11.9785 11.9785 0 0 0 3.5426-8.49 12.08 12.08 0 0 0-.1932-1.757zm-10.2737 8.5875a.7624.7624 0 0 1-.7624.7624H8.4932a.7624.7624 0 0 1-.7624-.7624V8.5875a.7624.7624 0 0 1 .7624-.7624h4.009a.7624.7624 0 0 1 .7624.7624v11.7374z"/></svg>`,
};

let portfolioData = null;
let currentFilter = 'all';
let isDark = localStorage.getItem('theme') === 'dark';

document.addEventListener('DOMContentLoaded', async () => {
    applyTheme(isDark);
    await loadData();
    hideLoader();
    setupNav();
    setupScrollSpy();
    setupReveal();
});

async function loadData() {
    try {
        const res = await fetch('./data.json');
        portfolioData = await res.json();
        renderAll();
    } catch (e) {
        console.error('Failed to load data.json:', e);
    }
}

function renderAll() {
    renderHero();
    renderAbout();
    renderProjects();
    renderContact();
    renderFooter();
}

function renderHero() {
    const p = portfolioData.personal;
    const exp = portfolioData.experience[0];

    document.getElementById('hero-section').innerHTML = `
    <div class="hero-bg-pattern"></div>
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Available for opportunities
      </div>
      <h1 class="hero-name">
        ${p.name.split(' ')[0]}<br>
        <span class="hero-name-accent">${p.name.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p class="hero-role">${p.title}</p>
      <p class="hero-tagline">${p.tagline}</p>
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">
          View Projects ${ICONS.arrowRight}
        </a>
        <a href="#contact" class="btn-secondary">
          ${ICONS.mail} Get in Touch
        </a>
      </div>
    </div>
  `;
}

function renderAbout() {
    const p = portfolioData.personal;
    const exp = portfolioData.experience;
    const edu = portfolioData.education;
    const skills = portfolioData.skills;

    const expHTML = exp.map(e => `
    <div class="exp-card">
      <div class="exp-role">${e.role}</div>
      <div class="exp-company">${ICONS.briefcase} ${e.company}</div>
      <div class="exp-duration">${ICONS.clock} ${e.duration} · ${e.type}</div>
    </div>
  `).join('');

    const eduHTML = edu.map(e => `
    <div class="edu-item">
      <div class="edu-badge">${e.degree}</div>
      <div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-field">${e.field}</div>
      </div>
    </div>
  `).join('');

    const skillsHTML = skills.map(s => {
        const icon = SKILL_ICONS[s] || `<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
        return `<span class="skill-pill">${icon}${s}</span>`;
    }).join('');

    document.getElementById('about-section').innerHTML = `
    <div class="section-label">About Me</div>
    <h2 class="section-title">Experience &<br>Skills</h2>
    <div class="about-grid">
      <div>
        <div class="section-label">${ICONS.briefcase} Experience</div>
        ${expHTML}
        <div style="margin-top:28px">
          <div class="section-label">${ICONS.book} Education</div>
          <div class="edu-list">${eduHTML}</div>
        </div>
      </div>
      <div>
        <div class="section-label">${ICONS.zap} Tech Stack</div>
        <div class="skills-cloud">${skillsHTML}</div>
      </div>
    </div>
  `;
}

function renderProjects() {
    const projects = portfolioData.projects;

    const filterHTML = `
    <div class="filter-tabs">
      <button class="filter-tab active" data-filter="all" onclick="filterProjects('all', this)">All (${projects.length})</button>
      <button class="filter-tab" data-filter="web" onclick="filterProjects('web', this)">Web</button>
      <button class="filter-tab" data-filter="desktop" onclick="filterProjects('desktop', this)">Desktop</button>
      <button class="filter-tab" data-filter="testing" onclick="filterProjects('testing', this)">Testing</button>
      <button class="filter-tab" data-filter="extension" onclick="filterProjects('extension', this)">Extensions</button>
      <button class="filter-tab" data-filter="ai" onclick="filterProjects('ai', this)">AI</button>
    </div>
  `;

    const cardsHTML = projects.map((proj, i) => renderProjectCard(proj, i)).join('');

    document.getElementById('projects-section').innerHTML = `
    <div class="projects-header">
      <div class="section-label">Portfolio</div>
      <h2 class="section-title">Projects</h2>
      <p class="section-sub">A collection of applications, tools, and extensions built across the full stack.</p>
      ${filterHTML}
    </div>
    <div class="projects-grid" id="projects-grid">
      ${cardsHTML}
    </div>
  `;
}

function renderProjectCard(proj, index) {
    const badgeClass = `badge-${proj.category}`;
    const categoryIcon = CATEGORY_ICONS[proj.category] || '';

    const techHTML = proj.technologies.slice(0, 5).map(t =>
        `<span class="tech-tag">${t}</span>`
    ).join('') + (proj.technologies.length > 5 ? `<span class="tech-tag">+${proj.technologies.length - 5}</span>` : '');

    const featuresHTML = proj.features.slice(0, 4).map(f => `
    <div class="project-feature">
      <div class="feature-check">${ICONS.check}</div>
      <span>${f}</span>
    </div>
  `).join('');

    const linksHTML = buildLinks(proj);

    const standoutHTML = proj.standout
        ? `<div class="project-standout">${proj.standout}</div>`
        : '';

    return `
    <div class="project-card reveal" data-category="${proj.category}" style="animation-delay: ${index * 0.08}s">
      <div class="project-card-top">
        <div class="project-type-badge ${badgeClass}">
          ${categoryIcon}
          ${proj.type}
        </div>
        <h3 class="project-name">${proj.name}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        ${standoutHTML}
      </div>
      <div class="project-card-bottom">
        ${linksHTML}
      </div>
    </div>
  `;
}

function buildLinks(proj) {
    const links = [];
    if (proj.liveDemo) {
        links.push(`
      <a href="${proj.liveDemo}" target="_blank" rel="noopener" class="project-link primary">
        ${ICONS.external} Live Demo
      </a>
    `);
    }
    if (proj.frontendRepo) {
        links.push(`
      <a href="${proj.frontendRepo}" target="_blank" rel="noopener" class="project-link">
        ${ICONS.github} Frontend
      </a>
    `);
    }
    if (proj.backendRepo) {
        links.push(`
      <a href="${proj.backendRepo}" target="_blank" rel="noopener" class="project-link">
        ${ICONS.github} Backend
      </a>
    `);
    }
    if (!proj.liveDemo && !proj.frontendRepo) {
        links.push(`<span class="project-link" style="opacity:0.5; cursor:default;">${ICONS.code} In Development</span>`);
    }
    return links.join('');
}

window.filterProjects = function (category, btn) {
    currentFilter = category;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.project-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
};

function renderContact() {
    const p = portfolioData.personal;
    document.getElementById('contact-section').innerHTML = `
    <div class="contact-inner">
      <div class="section-label">Contact</div>
      <h2 class="section-title">Let's Build<br>Something</h2>
      <p class="contact-desc">
        Open to full-time roles, freelance projects, and interesting collaborations.
        Feel free to reach out via any of the channels below.
      </p>
      <div class="contact-links">
        <a href="mailto:${p.email}" class="contact-link">
          ${ICONS.mail} ${p.email}
        </a>
        <a href="${p.github}" target="_blank" rel="noopener" class="contact-link">
          ${ICONS.github} GitHub
        </a>
        <a href="${p.linkedin}" target="_blank" rel="noopener" class="contact-link">
          ${ICONS.linkedin} LinkedIn
        </a>
      </div>
    </div>
  `;
}

function renderFooter() {
    const p = portfolioData.personal;
    const name = p.name;
    document.getElementById('footer-section').innerHTML = `
    <span class="footer-copy">© ${new Date().getFullYear()} ${name}. All rights reserved.</span>
    <span class="footer-brand">${name.split(' ')[0]}<span>.</span></span>
  `;
}

function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.innerHTML = dark ? ICONS.sun : ICONS.moon;
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

window.toggleTheme = function () {
    isDark = !isDark;
    applyTheme(isDark);
};

function setupNav() {
    const nav = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    document.getElementById('theme-toggle').addEventListener('click', window.toggleTheme);
    document.getElementById('theme-toggle').innerHTML = isDark ? ICONS.sun : ICONS.moon;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
        });
    });

    window.addEventListener('scroll', () => {
        nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
    });
}

function setupScrollSpy() {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function hideLoader() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 600);
}