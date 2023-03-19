import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { AgentCard } from "components";
import {Loader} from 'components/common/Loader'
const Agent = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });
  const allAgents = data?.data ?? [];
  console.log(allAgents);
  if (isLoading) {
    return <div style={{alignItems:'center' ,justifyContent:'center', display:'flex', marginTop:'10%'}}><Loader/></div>
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Box>
      <Typography color="#11142d" fontSize={25} fontWeight={700}>
        All Agents
      </Typography>
      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard
          key={agent._id}
          id={agent._id}
          name={agent.name}
          email={agent.email}
          avatar={agent.avatar}
          noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agent;
