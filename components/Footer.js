function Footer() {
  return (
    <div className="flex justify-around flex-col md:flex-row gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 max-w-xs">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 max-w-xs">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Ce n'est pas un vrai site</p>
        <p>Ceci est un clone</p>
        <p>Références acceptés</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 max-w-xs">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Support center</p>
        <p>Security</p>
        <p>Contact us</p>
        <p>Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
