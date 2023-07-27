import "./footer.scss"

const copyrightMessage = () => {
  const copyright = String.fromCodePoint(169);
  const year = new Date().getFullYear();
  const companyName = 'Lama Dev Admin Dashboard';

  return (
    <>
      {copyright} {year} {companyName}
    </>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <span>lamadmin</span>
      <span>{copyrightMessage()}</span>
    </div>
  )
}

export default Footer
