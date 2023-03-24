import { SectionList, Text, View } from "react-native";

const Catalogo = (props) => {
    return (
        <View>
            <SectionList 
              sections={[
                 {title: 'Honda', data:['Civic', 'City']},
                 {title: 'Toyota', data:['Etios', 'Hilux']},
              ]}
              renderItem={({item}) => (
                <Text>{item}</Text>
              )}
              renderSectionHeader={({section}) => (
                <Text style={{
                 backgroundColor: 'gray',
                 padding: 5,
                 borderBottomWidth:1 ,
               }}>{section.title}
             </Text>
              )}
              renderSectionFooter={({section}) => (
                <Text style={{
                    backgroundColor: 'red',
                    padding: 5,
                    borderBottomWidth:1 ,
                  }}>{section.footer}
                </Text>
              )}
            />
        </View>
    );
}

export default Catalogo;