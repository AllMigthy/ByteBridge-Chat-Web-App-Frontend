import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <>
        {user && <SideDrawer />}
      <div className="lg:flex">
        <Box
          w="100%"
          h="91.5vh"
          p="10px"
          className="lg:w-2/3"
        >
          {user && (
            <div className="flex flex-col lg:flex-row">
              <MyChats fetchAgain={fetchAgain} className="lg:w-1/2" />
              <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} className="lg:w-1/2" />
            </div>
          )}
        </Box>
      </div></>
  );
};

export default Chatpage;
