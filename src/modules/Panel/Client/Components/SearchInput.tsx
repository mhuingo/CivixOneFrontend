// src/components/common/SearchInput.tsx
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        borderRadius: 2,
      }}
    >
      <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
      <InputBase placeholder={placeholder} fullWidth  size="small"/>
    </Paper>
  );
}
