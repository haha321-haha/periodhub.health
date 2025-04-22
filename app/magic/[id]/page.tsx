// app/magic/[id]/page.tsx

const charms = {
  1: { name: "Charm One", description: "This is the first charm." },
  2: { name: "Charm Two", description: "This is the second charm." },
  3: { name: "Charm Three", description: "This is the third charm." },
};

export async function generateStaticParams() {
  const params = Object.keys(charms).map((id) => ({ id }));
  console.log("Generated static params:", params); // 添加调试日志
  return params;
}

export default function Page({ params }: { params: { id: string } }) {
  const charm = charms[params.id] || null;

  if (!charm) {
    return <div>404 - Charm Not Found</div>;
  }

  return (
    <div>
      <h1>{charm.name}</h1>
      <p>{charm.description}</p>
    </div>
  );
}