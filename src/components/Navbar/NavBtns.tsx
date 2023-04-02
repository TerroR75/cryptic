interface NavButton {
  name: string;
  link: string;
}

const buttons: NavButton[] = [
  {
    name: 'Market',
    link: '#market',
  },
  {
    name: 'Why Us',
    link: '#whyus',
  },
  {
    name: 'FAQ',
    link: '#faq',
  },
];
function NavBtns() {
  return (
    <div className='Navbar_NavBtns flex-initial w-64 flex items-center justify-between'>
      {buttons.map((btn, idx) => {
        return (
          <a key={idx} href={btn.link}>
            {btn.name}
          </a>
        );
      })}
    </div>
  );
}

export default NavBtns;
