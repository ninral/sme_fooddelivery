import { expect, it, jest, test } from '@jest/globals'
import { actions } from '@/store/user'
import { setUser } from '@/store/user'
import flushPromises from 'flush-promises'

describe('actions', () => {
    it('setUser', async () => {
        const commit = jest.fn()
        let data = {
            loggedIn: true,
            data: {
                displayName: "test",
                email: "test@test.com",
                id: "123456789"
            }
        }

        actions.setUser({ commit }, { user: data, loggedIn: true })
    
        expect(commit).toHaveBeenCalledWith('SET_USER', { "loggedIn": true, "user": data})
    })
})
