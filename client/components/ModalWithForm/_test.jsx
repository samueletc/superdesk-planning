import React from 'react';
import {mount} from 'enzyme';
import {ModalWithForm, AssignmentForm} from '../index';
import {createTestStore} from '../../utils';
import {Provider} from 'react-redux';

xdescribe('<ModalWithForm />', () => {
    it('open the modal', () => {
        let initialState = {users: []};

        let store = createTestStore({initialState: initialState});

        const wrapper = mount(
            <Provider store={store}>
                <ModalWithForm
                    title="Title"
                    form={AssignmentForm}
                    initialValues={{field: 'value'}}
                    show={true} />
            </Provider>
        );

        expect(wrapper.find('Component').props().title).toBe('Title');
        expect(wrapper.find('Component').props().show).toBe(true);
        expect(wrapper.find('Component').props().initialValues)
            .toEqual({field: 'value'});
    });
});
