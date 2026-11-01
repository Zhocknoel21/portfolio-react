// Lines typed out by the hero terminal.
// 'prompt' lines are typed letter by letter; 'out' lines appear at once.
export const terminalLines = [
  { type: 'prompt', text: 'whoami' },
  { type: 'out', content: (<><b>Noel</b> — Computer Science student, Tangub City Global College</>) },
  { type: 'prompt', text: 'cat role.txt' },
  { type: 'out', content: <>Aspiring web developer, exploring software &amp; database systems</> },
  { type: 'prompt', text: 'ls currently_learning/' },
  {
    type: 'out',
    content: (
      <>
        <span className="k">flutter</span>&nbsp;&nbsp;
        <span className="k">dart</span>&nbsp;&nbsp;
        <span className="k">ui-ux</span>&nbsp;&nbsp;
        <span className="k">databases</span>
      </>
    ),
  },
];
