import instance from './default'

export function getUserInfo() {
    return instance.get('/api/getUserInfo')
}