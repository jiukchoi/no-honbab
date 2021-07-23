import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./MeetingsCreate.styles";
import { Picker } from "@react-native-picker/picker";

const CreateUI = ({ input, setInput, isState, setIsState }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.textInput}
        onChangeText={(v) => setInput({ ...input, title: v })}
        value={input.title}
        placeholder="제목을 설정해주세요."
      />
      <View style={styles.remarksWrapper}>
        <Text style={{ color: "#E24E4A", marginRight: 15, fontSize: 12 }}>
          00일 뒤 모집 마감
        </Text>
        <Text style={{ fontSize: 12, color: "#adada3" }}>
          모집일 2일 전에 자동으로 마감됩니다.
        </Text>
      </View>
      <View style={{ paddingLeft: 20 }}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 8,
            alignItems: "center",
            justifyContent: "space-between",
            width: 320,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              style={{ marginRight: 10 }}
              source={require("../../../../../public/meetings/time.png")}
            />
            <Text>{`${input.time.month}.${input.time.date} ${input.time.startTime.hours}:${input.time.startTime.mins} ~ ${input.time.endTime.hours}:${input.time.endTime.mins}`}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              setIsState((prev) => ({
                ...isState,
                time: { ...isState.time, window: !prev.time.window },
              }))
            }
          >
            <Image
              source={require("../../../../../public/meetings/arrow-red.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 8,
            alignItems: "center",
            justifyContent: "space-between",
            width: 320,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image
              style={{ marginRight: 10, marginTop: 3 }}
              source={require("../../../../../public/meetings/location.png")}
            />
            <View>
              <Text style={{ marginBottom: 5 }}>장소</Text>
              <Text style={{ fontSize: 10, color: "#adada3" }}>주소</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              setIsState((prev) => ({ ...isState, place: !prev.place }))
            }
          >
            <Image
              source={require("../../../../../public/meetings/arrow-red.png")}
            />
          </TouchableOpacity>
        </View>
        {isState.time.window && (
          <ScrollView>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 20, marginRight: 20 }}>
                <TouchableOpacity
                  onPress={() =>
                    setIsState((prev) => ({
                      ...isState,
                      time: {
                        ...isState.time,
                        pickerMonth: !prev.time.pickerMonth,
                      },
                    }))
                  }
                  style={{
                    width: 50,
                    padding: 5,
                    borderRadius: 12,
                    backgroundColor: "blue",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold" }}
                  >{`${input.time.month}월`}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20, marginRight: 20 }}>
                <TouchableOpacity
                  onPress={() =>
                    setIsState((prev) => ({
                      ...isState,
                      time: {
                        ...isState.time,
                        pickerDate: !prev.time.pickerDate,
                      },
                    }))
                  }
                  style={{
                    width: 50,
                    padding: 5,
                    borderRadius: 12,
                    backgroundColor: "red",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold" }}
                  >{`${input.time.date}일`}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20, marginRight: 20 }}>
                <TouchableOpacity
                  onPress={() =>
                    setIsState((prev) => ({
                      ...isState,
                      time: {
                        ...isState.time,
                        pickerStartTime: !prev.time.pickerStartTime,
                      },
                    }))
                  }
                  style={{
                    width: 80,
                    padding: 5,
                    borderRadius: 12,
                    backgroundColor: "orange",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold" }}
                  >{`${input.time.startTime.hours}:${input.time.startTime.mins}`}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20, marginRight: 20 }}>
                <TouchableOpacity
                  onPress={() =>
                    setIsState((prev) => ({
                      ...isState,
                      time: {
                        ...isState.time,
                        pickerEndTime: !prev.time.pickerEndTime,
                      },
                    }))
                  }
                  style={{
                    width: 80,
                    padding: 5,
                    borderRadius: 12,
                    backgroundColor: "pink",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold" }}
                  >{`${input.time.endTime.hours}:${input.time.endTime.mins}`}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {isState.time.pickerMonth && (
              <Picker
                selectedValue={input.time.mouth}
                onValueChange={(itemValue, itemIndex) =>
                  setInput({
                    ...input,
                    time: { ...input.time, month: itemValue },
                  })
                }
              >
                {new Array(12).fill(1).map((_, i) => (
                  <Picker.Item label={`${i + 1}월`} value={i + 1} />
                ))}
              </Picker>
            )}
            {isState.time.pickerDate && (
              <Picker
                selectedValue={input.time.date}
                onValueChange={(itemValue, itemIndex) =>
                  setInput({
                    ...input,
                    time: { ...input.time, date: itemValue },
                  })
                }
              >
                {new Array(31).fill(1).map((_, i) => (
                  <Picker.Item label={`${i + 1}일`} value={i + 1} />
                ))}
              </Picker>
            )}
            {isState.time.pickerStartTime && (
              <View style={{ flexDirection: "row" }}>
                <Picker
                  style={{ width: "50%" }}
                  selectedValue={input.time.startTime.hours}
                  onValueChange={(itemValue, itemIndex) =>
                    setInput({
                      ...input,
                      time: {
                        ...input.time,
                        startTime: {
                          ...input.time.startTime,
                          hours: itemValue,
                        },
                      },
                    })
                  }
                >
                  {new Array(12).fill(1).map((_, i) => {
                    if (i < 9)
                      return (
                        <Picker.Item
                          label={`0${i + 1}시`}
                          value={`0${i + 1}`}
                        />
                      );
                    else
                      return <Picker.Item label={`${i + 1}시`} value={i + 1} />;
                  })}
                </Picker>
                <Picker
                  style={{ width: "50%" }}
                  selectedValue={input.time.startTime.mins}
                  onValueChange={(itemValue, itemIndex) =>
                    setInput({
                      ...input,
                      time: {
                        ...input.time,
                        startTime: { ...input.time.startTime, mins: itemValue },
                      },
                    })
                  }
                >
                  {new Array(60).fill(1).map((_, i) => {
                    if (i < 9)
                      return (
                        <Picker.Item
                          label={`0${i + 1}분`}
                          value={`0${i + 1}`}
                        />
                      );
                    else
                      return <Picker.Item label={`${i + 1}분`} value={i + 1} />;
                  })}
                </Picker>
              </View>
            )}
            {isState.time.pickerEndTime && (
              <View style={{ flexDirection: "row" }}>
                <Picker
                  style={{ width: "50%" }}
                  selectedValue={input.time.endTime.hours}
                  onValueChange={(itemValue, itemIndex) =>
                    setInput({
                      ...input,
                      time: {
                        ...input.time,
                        endTime: { ...input.time.endTime, hours: itemValue },
                      },
                    })
                  }
                >
                  {new Array(12).fill(1).map((_, i) => {
                    if (i < 9)
                      return (
                        <Picker.Item
                          label={`0${i + 1}시`}
                          value={`0${i + 1}`}
                        />
                      );
                    else
                      return <Picker.Item label={`${i + 1}시`} value={i + 1} />;
                  })}
                </Picker>
                <Picker
                  style={{ width: "50%" }}
                  selectedValue={input.time.endTime.mins}
                  onValueChange={(itemValue, itemIndex) =>
                    setInput({
                      ...input,
                      time: {
                        ...input.time,
                        endTime: { ...input.time.endTime, mins: itemValue },
                      },
                    })
                  }
                >
                  {new Array(60).fill(1).map((_, i) => {
                    if (i < 9)
                      return (
                        <Picker.Item
                          label={`0${i + 1}분`}
                          value={`0${i + 1}`}
                        />
                      );
                    else
                      return <Picker.Item label={`${i + 1}분`} value={i + 1} />;
                  })}
                </Picker>
              </View>
            )}
          </ScrollView>
        )}
        {isState.place && (
          <View>
            <Text>place</Text>
          </View>
        )}
        {!isState.time.window && !isState.place && (
          <View>
            <View style={styles.subView}>
              <Image
                style={styles.tagImg}
                source={require("../../../../../public/meetings/tag-red.png")}
              />
              <Text style={styles.title}>주최자</Text>
              <Text style={styles.text}>민성우</Text>
            </View>
            <View style={styles.subView}>
              <Image
                style={styles.tagImg}
                source={require("../../../../../public/meetings/tag-beige.png")}
              />
              <Text style={styles.title}>모집인원</Text>
              <TextInput
                style={{ fontSize: 10 }}
                onChangeText={(v) => setInput({ ...input, recruitment: v })}
                value={input.recruitment}
                placeholder="모집인원은 2~6명에서 선택하실 수 있습니다."
              />
            </View>
            <View style={styles.subView}>
              <Image
                style={styles.tagImg}
                source={require("../../../../../public/meetings/tag-orange.png")}
              />
              <Text style={styles.title}>음식 종류</Text>
              <TextInput
                style={{ fontSize: 10 }}
                onChangeText={(v) => setInput({ ...input, foodType: v })}
                value={input.foodType}
                placeholder="음식 종류를 선택해주세요."
              />
            </View>
            <View style={styles.contentsWrapper}>
              <Image
                style={styles.tagImg}
                source={require("../../../../../public/meetings/tag-orange.png")}
              />
              <View style={{ paddingRight: 20 }}>
                <Text
                  style={[styles.title, { marginBottom: 10, width: "100%" }]}
                >
                  모집글
                </Text>
                <TextInput
                  multiline={true}
                  numberOfLines={15}
                  style={{ fontSize: 10 }}
                  onChangeText={(v) => setInput({ ...input, contents: v })}
                  value={input.contents}
                  placeholder="내용을 입력하세요."
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("게시물 목록");
              }}
              disabled={!isState.create}
              style={[
                styles.button,
                isState.create
                  ? { backgroundColor: "#E24E4A" }
                  : { backgroundColor: "#bdbdbd" },
              ]}
            >
              <Text style={styles.buttonText}>게시물 생성</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default CreateUI;
