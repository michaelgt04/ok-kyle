require 'omniauth'

RSpec.configure do |config|

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end


  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end


  config.shared_context_metadata_behavior = :apply_to_host_groups

  OmniAuth.config.test_mode = true
    omniauth_hash =
      { 'provider' => 'facebook',
        'uid' => '12345',
        'info' => {
          'name' => 'Keyan Estahbanaty',
          'email' => 'kyle@keyan.com',
          'nickname' => '#1KyleFan'
        }
}

OmniAuth.config.add_mock(:facebook, omniauth_hash)
end
