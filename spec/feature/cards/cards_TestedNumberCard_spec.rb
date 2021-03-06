# frozen_string_literal: true

require 'spec_helper'
require_relative '../../lib/BreadCrumbs'
require_relative '../../lib/TestedNumberCard'

describe 'iPhone 6/7/8', type: :feature do
  context 'page [/cards/number-of-tested]' do
    before do
      visit '/cards/number-of-tested'
      render_lazy_contents
      page.scroll_to('#TestedNumberCard')
    end

    describe '検査実施件数(TestedNumberCard)' do
      it '項目の値' do
        has_tested_number_card
        has_breadcrumbs(id: '#TestedNumberCard', title: '検査実施件数')
      end
    end
  end
end
