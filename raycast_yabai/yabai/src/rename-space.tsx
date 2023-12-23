// import { Action, ActionPanel, List } from "@raycast/api"
// import { useState, useEffect } from "react";
import { getYabaiDisplaysNotAsync } from "./utils/utils";
import { Space } from "./utils/interfaces";
import { ShowSpaceList } from "./components/ShowSpaceList";
import RenameSpaceForm from "./components/RenameSpaceForm";


// const { spawn } = require('node:child_process');
// const cmd = spawn('yabai', ['-m', 'query', '--spaces'])
// cmd.stdout.on('data', (data) => {
//     // console.log(`${data}`);
//     let ls = JSON.parse(data);
// })


// const items = ["Augustiner Helles", "Camden Hells", "Leffe Blonde", "Sierra Nevada IPA"];

export default function Command() {
  /*
  */
  // const [searchText, setSearchText] = useState("");
  // const [filteredList, filterList] = useState(items);

  // useEffect(() => {
  //   filterList(items.filter((item) => item.includes(searchText)));
  // }, [searchText]);

  // const [items, setItems] = useState<Space[]>([]);
  const items = getYabaiDisplaysNotAsync();

  return (
      <ShowSpaceList items={items} target={(space: Space) => <RenameSpaceForm space={space}/>}></ShowSpaceList>
  );
}



    // <List
    //   filtering={false}
    //   onSearchTextChange={setSearchText}
    //   navigationTitle="Search Beers"
    //   searchBarPlaceholder="Search your favorite beer"
    // >
    //   {filteredList.map((item) => (
    //     <List.Item
    //       key={item}
    //       title={item}
    //       actions={
    //         <ActionPanel>
    //           <Action title="Select" onAction={() => console.log(`${item} selected`)} />
    //         </ActionPanel>
    //       }
    //     />
    //   ))}
    // </List>
    // <List>
    //   {items.map((space) => (
    //     <List.Item
    //       title={`${space.label} | ${space.index}`}
    //       key={space.index}
    //       // Add Action
    //       actions={
    //         <ActionPanel>

    //         </ActionPanel>
    //       }
    //       ></List.Item>
    //   ))}
    // </List>
    // target={(space: Space) => <CreateSpaceForm space={space} showTitle={true} 