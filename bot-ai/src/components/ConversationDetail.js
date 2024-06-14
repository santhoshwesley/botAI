import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useContext } from "react";
import { ConversationContext } from "../context/ThemePallete";

const ConversationDetail = () => {
  const { id } = useParams();
  const { conversation } = useContext(ConversationContext);
  const conversationDetail = conversation[parseInt(id, 10)];

  if (!conversationDetail) {
    return <Typography variant="h6">Conversation not found</Typography>;
  }

  return (
    <Box p={2}>
      <Typography variant="h6">Conversation Details</Typography>
      {conversationDetail.map((entry, index) => (
        <Box key={index} mb={2} className="conversationEntry">
          <Typography variant="body1">
            <strong>Q:</strong> {entry.question}
          </Typography>
          <Typography variant="body1">
            <strong>A:</strong> {entry.response}
          </Typography>
          <Box mt={1}>
            <IconButton disabled={entry.feedback !== null}>
              <ThumbUpIcon
                color={entry.feedback === "like" ? "primary" : "disabled"}
              />
            </IconButton>
            <IconButton disabled={entry.feedback !== null}>
              <ThumbDownIcon
                color={entry.feedback === "dislike" ? "primary" : "disabled"}
              />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ConversationDetail;
