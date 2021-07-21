import React from 'react'
import { Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native'
import { styles } from './MeetingsCreate.styles'

const CreateUI = ({ title, setTitle }) => {
  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.textInput}
        onChangeText={setTitle}
        value={title}
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
            <Text>mm.dd (목) tt:tt ~ tt:tt </Text>
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
          </View>
          <View style={styles.subView}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-beige.png')} />
            <Text style={styles.title} >
              모집인원
            </Text>
          </View>
          <View style={styles.subView}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
            <Text style={styles.title} >
              음식 종류
            </Text>
          </View>
          <View style={styles.contentsWrapper}>
            <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
            <Text style={styles.title} >
              음식 종류
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>게시물 생성</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateUI