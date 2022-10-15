function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>Fonctionnement de Airbnb</p>
        <p>Investisseur</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibilité</p>
        <p>Ce n'est pas un vrai site</p>
        <p>Ceci est un clone</p>
        <p>Références acceptés</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Centre de support</p>
        <p>Sécurité</p>
        <p>Nous contacter</p>
        <p>Plan du site</p>
      </div>
    </div>
  );
}

export default Footer;
