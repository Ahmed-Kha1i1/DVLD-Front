function Logo({ width = "w-32" }) {
  console.log(width);
  return (
    <div className="w-32">
      <img src="/logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
