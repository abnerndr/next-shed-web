export const APP_ROUTES = {
    private: {
        dashboard: {
            name: '/dashboard'
        }
    },
    public: {
        login: '/',
        auth: {
            name: '/auth',
            id: {
                name: '[id]'
            }
        },
        subscription: {
            name: '/subscription',
            step1: {
                name: '/step1'
            },
            step2: {
                name: '/step2'
            }
        }
    }
}