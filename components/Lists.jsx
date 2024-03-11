import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";

const LIMIT_ELEMENTS = 1000;
const LIMIT_SECTIONS = 10;
const ELEMENTS_PER_SECTION = LIMIT_ELEMENTS / LIMIT_SECTIONS;

const ListOfItems = (props) => {
  const elements = Array.from(Array(LIMIT_ELEMENTS).keys());
  const sections = Array.from(Array(LIMIT_SECTIONS).keys());
  const data = elements.map((elementNumber) => ({
    name: `Ivan wpo ${elementNumber}`,
    key: `key_of_${elementNumber}`,
  }));

  const sectionsData = sections.map((sectionNumber) => {
    let sectionData = [];

    for (let idx = 0; idx < ELEMENTS_PER_SECTION; idx++) {
      sectionData[idx] = data[idx + ELEMENTS_PER_SECTION * sectionNumber];
    }

    console.log("sectionData: ", sectionData);

    return {
      title: `Section #${sectionNumber}`,
      data: sectionData,
    };
  });
  console.log("HOliwis mundo");

  return (
    <View>
      <SectionList
        sections={sectionsData}
        renderItem={({ item }) => (
          <Text key={item.key} style={styles.text}>
            MI nombre es: {item.name ?? ""}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text key={`header_${section.title}`} style={styles.header}>
            {section.title}
          </Text>
        )}
      />
      {/* <FlatList
        // data={elements}
        data={data}
        renderItem={({ item }) => (
          <Text key={item.key} style={styles.text}>
            MI nombre es: {item.name ?? ""}
          </Text>
        )}
      /> */}
      {/* {elements.map((elementNumber) => (
        <Text key={elementNumber} style={styles.text}>
          MI nombre es: {elementNumber ?? ""}
        </Text>
      ))} */}
    </View>
  );
};

export default function Lists() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);

    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    console.log("users: ", users);
    setLoading(false);
    setUsers(users.map((user) => ({ ...user, key: `${user.id}` })));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>...Cargando</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.text} key={item.key}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
  // return <ListOfItems />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 5,
    fontSize: 25,
  },
  header: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    fontSize: 35,
  },
});
