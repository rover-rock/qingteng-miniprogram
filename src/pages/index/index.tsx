import React, { Component, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtForm,AtInput } from 'taro-ui'
import './index.less'

const Index = () => {
    const [ company,setCompany ] = useState('')
    console.log(company);
    return (
      <View className='index'>
        <View className='search-panel'>
          <AtForm>
            <AtInput value={company} onChange={value => setCompany(value as string)} name='company' title='公司' type='text' placeholder='输入关键词'></AtInput>
          </AtForm>
        </View>
      </View>
    )
}

export default Index
