import { Flex, Title } from "@mantine/core";

const Hello = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      sx={{
        height: "100%",
      }}
    >
      <Title
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{ fontFamily: "Greycliff CF, sans-serif" }}
        ta="center"
        size="h1"
        fw={700}
      >
        Elixin React Stack | ERS
      </Title>
      <ul
        style={{
          padding: 0,
          listStyle: "none",
          fontSize: "1.6rem",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Mantine</li>
        <li>⚙ Eslint</li>
        <li>💅 Prettier</li>
      </ul>
    </Flex>
  );
};

export default Hello;
