import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './MeetingsCreate.styles'

const CreateUI = ({ input, setInput, isCreate }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.textInput}
        onChangeText={(v) => setInput({...input, title: v})}
        value={input.title}
        placeholder='제목을 설정해주세요.'
      />
      <View style={styles.remarksWrapper}>
        <Text style={{color: '#E24E4A', marginRight: 15, fontSize: 12}}>00일 뒤 모집 마감</Text>
        <Text style={{fontSize: 12, color: '#adada3'}}>모집일 2일 전에 자동으로 마감됩니다.</Text>
      </View>
      <View style={{paddingLeft: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 8, alignItems: 'center', justifyContent: 'space-between', width: 320}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../../../public/meetings/time.png')}
            />
            <Text>00.00 (#) 00:00 ~ 00:00</Text>
          </View>
          <Image source={require('../../../../../public/meetings/arrow-red.png')} />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 8, alignItems: 'center', justifyContent: 'space-between', width: 320}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10}}>
            <Image
              style={{marginRight: 10, marginTop: 3}}
              source={require('../../../../../public/meetings/location.png')} />
            <View>
              <Text style={{marginBottom: 5}}>장소</Text>
              <Text style={{fontSize: 10, color: '#adada3'}}>주소</Text>
            </View>
          </View>
          <Image source={require('../../../../../public/meetings/arrow-red.png')} />
        </View>
        <View>
          <View style={styles.subView}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-red.png')} />
            <Text style={styles.title} >
              주최자
            </Text>
            <Text style={styles.text}>
              민성우
            </Text>
          </View>
          <View style={styles.subView}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-beige.png')} />
            <Text style={styles.title} >
              모집인원
            </Text>
            <TextInput
              style={{fontSize: 10}}
              onChangeText={(v) => setInput({...input, recruitment: v})}
              value={input.recruitment}
              placeholder='모집인원은 2~6명에서 선택하실 수 있습니다.'
            />
          </View>
          <View style={styles.subView}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
            <Text style={styles.title} >
              음식 종류
            </Text>
            <TextInput
              style={{fontSize: 10}}
              onChangeText={(v) => setInput({...input, foodType: v})}
              value={input.foodType}
              placeholder='음식 종류를 선택해주세요.'
            />
          </View>
          <View style={styles.contentsWrapper}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
            <View style={{paddingRight: 20}}>
              <Text style={[styles.title, {marginBottom: 10, width: '100%'}]}>
                모집글
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={15}
                style={{fontSize: 10}}
                onChangeText={(v) => setInput({...input, contents: v})}
                value={input.contents}
                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('게시물 목록')}} disabled={!isCreate} style={[styles.button, isCreate ? {backgroundColor: '#E24E4A'} : {backgroundColor: '#bdbdbd'} ]}>
        <Text style={styles.buttonText}>게시물 생성</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateUI