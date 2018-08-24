'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _utils = require('../utils');

var _field = require('../field');

var _field2 = _interopRequireDefault(_field);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

var _toast = require('../toast');

var _toast2 = _interopRequireDefault(_toast);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _area = require('../area');

var _area2 = _interopRequireDefault(_area);

var _Detail = require('./Detail');

var _Detail2 = _interopRequireDefault(_Detail);

var _switchCell = require('../switch-cell');

var _switchCell2 = _interopRequireDefault(_switchCell);

var _mobile = require('../utils/validate/mobile');

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultData = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  area_code: '',
  postal_code: '',
  address_detail: '',
  is_default: false
};

/* eslint-disable camelcase */
exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('cell-group', [_c('field', { attrs: { "maxlength": "15", "placeholder": _vm.$t('name'), "label": _vm.$t('receiver'), "error": _vm.errorInfo.name }, on: { "focus": function focus($event) {
          _vm.onFocus('name');
        } }, model: { value: _vm.data.name, callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        }, expression: "data.name" } }), _c('field', { attrs: { "type": "tel", "label": _vm.$t('tel'), "placeholder": _vm.$t('telPlaceholder'), "error": _vm.errorInfo.tel }, on: { "focus": function focus($event) {
          _vm.onFocus('tel');
        } }, model: { value: _vm.data.tel, callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        }, expression: "data.tel" } }), _c('field', { attrs: { "readonly": "", "label": _vm.$t('area'), "placeholder": _vm.$t('area'), "value": _vm.areaText }, on: { "click": function click($event) {
          _vm.showArea = true;
        } } }), _c('address-edit-detail', { attrs: { "focused": _vm.detailFocused, "value": _vm.data.address_detail, "error": _vm.errorInfo.address_detail, "search-result": _vm.searchResult, "show-search-result": _vm.showSearchResult }, on: { "focus": function focus($event) {
          _vm.onFocus('address_detail');
        }, "blur": function blur($event) {
          _vm.detailFocused = false;
        }, "input": _vm.onChangeDetail, "select-search": function selectSearch($event) {
          _vm.$emit('select-search', $event);
        } } }), _vm.showPostal ? _c('field', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], staticClass: "van-hairline--top", attrs: { "type": "tel", "maxlength": "6", "label": _vm.$t('postal'), "placeholder": _vm.$t('postal'), "error": _vm.errorInfo.postal_code }, on: { "focus": function focus($event) {
          _vm.onFocus('postal_code');
        } }, model: { value: _vm.data.postal_code, callback: function callback($$v) {
          _vm.$set(_vm.data, "postal_code", $$v);
        }, expression: "data.postal_code" } }) : _vm._e(), _vm._t("default"), _vm.showSetDefault ? _c('switch-cell', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], attrs: { "title": _vm.$t('defaultAddress') }, model: { value: _vm.data.is_default, callback: function callback($$v) {
          _vm.$set(_vm.data, "is_default", $$v);
        }, expression: "data.is_default" } }) : _vm._e()], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], class: _vm.b('buttons') }, [_c('van-button', { attrs: { "block": "", "loading": _vm.isSaving, "type": "primary" }, on: { "click": _vm.onSave } }, [_vm._v("\n      " + _vm._s(_vm.saveButtonText || _vm.$t('save')) + "\n    ")]), _vm.isEdit ? _c('van-button', { attrs: { "block": "", "loading": _vm.isDeleting }, on: { "click": _vm.onDelete } }, [_vm._v("\n      " + _vm._s(_vm.deleteButtonText || _vm.$t('delete')) + "\n    ")]) : _vm._e()], 1), _c('popup', { attrs: { "position": "bottom", "lazy-render": false, "get-container": _vm.getAreaContainer }, model: { value: _vm.showArea, callback: function callback($$v) {
          _vm.showArea = $$v;
        }, expression: "showArea" } }, [_c('van-area', { ref: "area", attrs: { "loading": !_vm.areaListLoaded, "value": _vm.data.area_code, "area-list": _vm.areaList }, on: { "confirm": _vm.onAreaConfirm, "cancel": function cancel($event) {
          _vm.showArea = false;
        } } })], 1)], 1);
  },

  name: 'address-edit',

  components: {
    Field: _field2.default,
    Popup: _popup2.default,
    VanArea: _area2.default,
    VanButton: _button2.default,
    SwitchCell: _switchCell2.default,
    AddressEditDetail: _Detail2.default
  },

  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    addressInfo: {
      type: Object,
      default: function _default() {
        return (0, _extends3.default)({}, defaultData);
      }
    },
    searchResult: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    telValidator: {
      type: Function,
      default: _mobile2.default
    }
  },

  data: function data() {
    return {
      data: {},
      showArea: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postal_code: false,
        address_detail: false
      }
    };
  },

  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields: function hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },
    areaListLoaded: function areaListLoaded() {
      return (0, _utils.isObj)(this.areaList) && (0, _keys2.default)(this.areaList).length;
    },
    isEdit: function isEdit() {
      return this.showDelete || !!this.data.id;
    },
    areaText: function areaText() {
      var _data = this.data,
          province = _data.province,
          city = _data.city,
          county = _data.county,
          area_code = _data.area_code;

      return province && city && county && area_code ? province + ' ' + city + ' ' + county : '';
    }
  },

  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = (0, _extends3.default)({}, defaultData, val);

        this.setAreaCode(val.area_code);
      },

      deep: true,
      immediate: true
    },

    areaList: function areaList() {
      this.setAreaCode(this.data.area_code);
    }
  },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.address_detail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showArea = false;
      this.data.area_code = values[2].code;
      this.assignAreaValues(values);
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues(values) {
      (0, _assign2.default)(this.data, {
        province: values[0] ? values[0].name : '',
        city: values[1] ? values[1].name : '',
        county: values[2] ? values[2].name : ''
      });
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'area_code', 'address_detail'];

      if (this.showPostal) {
        items.push('postal_code');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);
        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast2.default)(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key]).trim();
      var $t = this.$t;

      switch (key) {
        case 'name':
          return value ? '' : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');
        case 'area_code':
          return value ? '' : $t('areaEmpty');
        case 'address_detail':
          return value ? '' : $t('addressEmpty');
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog2.default.confirm({
        title: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },

    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },

    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      var _this3 = this;

      this.data.area_code = code || '';
      this.$nextTick(function () {
        var area = _this3.$refs.area;

        if (area) {
          _this3.assignAreaValues(area.getValues());
        }
      });
    },
    getAreaContainer: function getAreaContainer() {
      return document.body;
    }
  }
});