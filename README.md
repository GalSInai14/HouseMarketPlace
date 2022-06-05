<h1>House MarketPlace</h1>
<h2>Sell or Rent your property using House MarketPlace!</h2>
<p>Created with React and Firebase.</p>
<button className='primary button'>
  <a href='https://house-market-place-beryl.vercel.app/'>Visit</a>
</button>

<h1>Usage</h1>
<h2>Geolocation</h2>
The listings use Google geocoding to get the coords from the address field. You need to either rename .env.example to .env and add your Google Geocode API key OR in the CreateListing.jsx file you can set geolocationEnabled to "false" and it will add a lat/lng field to the form.
