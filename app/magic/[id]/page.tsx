// 定义 Charm 接口
interface Charm {
  name: string;
  description: string;
}

// 使用 Record<number, Charm> 声明 charms 对象
const charms: Record<number, Charm> = {
  1: { name: "Charm One", description: "This is the first charm." },
  2: { name: "Charm Two", description: "This is the second charm." },
  3: { name: "Charm Three", description: "This is the third charm." },
};

// 生成静态路由参数
export async function generateStaticParams() {
  const params = Object.keys(charms).map((id) => ({ id }));
  console.log("Generated static params:", params); // 添加调试日志
  return params;
}

// 动态路由页面组件
export default function Page({ params }: { params: { id: string } }) {
  // 将 params.id 转换为数字类型以匹配 charms 的键类型
  const charm = charms[Number(params.id)] || null;

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