const shuffle = () => {
  const assets = [
    { image: "/assets/luffy2.png" },
    { image: "/assets/zoro.png" },
    { image: "/assets/nami.png" },
    { image: "/assets/usopp.png" },
    { image: "/assets/sanji.png" },
    { image: "/assets/chopper.png" },
    { image: "/assets/robin.png" },
    { image: "/assets/brook.png" },
  ];

  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
